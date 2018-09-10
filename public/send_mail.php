<?php
/**
 * Created by PhpStorm.
 * User: novozhilova.en
 * Date: 31.08.2018
 * Time: 15:31
 */

// $_POST['json'] = '{"name":"test name","email":"test email","phone":"test phone","comment":"test phone","subject":"subject","data":[{"title":"\u0414\u043e\u043f \u043f\u043e\u043b\u0435 1","value":"\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 1"},{"title":"\u0414\u043e\u043f \u043f\u043e\u043b\u0435 2","value":"\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 2"}]}';
// $_POST['hash_key'] = '2db124514ddce3d89fb36f372f64d810';

if (!isset($_POST['hash_key'])) {
    http_response_code(404);
    return;
}
if (!isset($_POST['json'])) {
    http_response_code(404);
    return;
}

if ($_POST['hash_key'] != md5($_POST['json'])) {
    http_response_code(403);
    return;
}

make_mail($_POST['json']);

/**
 * @param string $json
 */
function make_mail($json)
{
    $allField = json_decode($json, true);
    $subject = 'Сообщение с сайта';
    $commonFiels = [
        'name' => 'ФИО',
        'email' => 'Email',
        'phone' => 'Телефон',
        'comment' => 'Комментарий'
    ];
    $message = '';
    foreach ($commonFiels as $fieldName => $title) {
        if (isset($allField[$fieldName])) {
            $message .= $title . ": " . $allField[$fieldName] . "\n";
        }
    }
    if (isset($allField['data'])) {
        $message .= generate_message_from_data($allField['data']);
    }

    if (isset($allField['subject'])) {
        $subject = $allField['subject'];
    }
    if (send_mail('novozhilova.en@spb.rusoft-company.ru,avakyan.sf@spb.rusoft-company.ru', $subject, $message)) {
        http_response_code(200);
        return;
    }
    http_response_code(500);
    return;
}

/**
 * @param array $data
 * @return string
 */
function generate_message_from_data($data = [])
{
    $message = '';
    foreach ($data as $ind => $field) {
        if (isset($field['title']) && isset($field['value'])) {
            $message .= $field['title'] . ": " . $field['value'] . "\n";
        }
    }
    return $message;
}

/**
 * @param string $to
 * @param string $subject
 * @param string $message
 * @return bool
 */
function send_mail($to = '', $subject = '', $message = '')
{
    $headers = 'From: site@rucard.net' . "\r\n" .
        'Reply-To: site@rucard.net' . "\r\n" .
        'Content-Type: text/plain; charset="utf-8' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    return mail($to, $subject, $message, $headers)  || print_r(error_get_last());
}
