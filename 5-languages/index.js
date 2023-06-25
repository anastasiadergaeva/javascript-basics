const userLanguage = prompt('Введите Ваш язык. Пример ввода: eng.');
switch (true) {
    case userLanguage === 'eng':
        console.log('Good afternoon!');
        break;
    case userLanguage === 'de':
        console.log('Guten Tag!');
        break;
    case userLanguage === 'ita':
        console.log('Buon pomeriggio!');
        break;
    case userLanguage === 'spa':
        console.log('Buenas tardes');
        break;
    case userLanguage === 'rus':
        console.log('Добрый день!');
        break;
    case userLanguage === 'zho':
        console.log('下午好');
        break;
    case userLanguage === 'hin':
        console.log('नमस्कार');
        break;
    case userLanguage === 'ara':
        console.log('مساء الخير');
        break;
    default:
        console.log('Проверьте введённый язык. Если название языка введено правильно, но вы всё равно получили это сообщение, то вашего языка не нашлось в нашей базе данных. Приносим свои извинения.');
}