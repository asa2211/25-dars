let array = [];

while (true) {
    let input = prompt("Yangi ma'lumot kiritish uchun 'add' va ma'lumotni o'chirish uchun 'del' so'zini yozing yoki 'stop' yozing:");
    
    if (input.toLowerCase() === 'stop') {
        break;
    }
    
    let [command, ...data] = input.split(' ');

    if (command.toLowerCase() === 'add') {
        let item = data.join(' ');
        if (item) {
            array.push(item);
            console.log(`${item} massivga qo'shildi.`);
        } else {
            console.log("Hech qanday ma'lumot kiritilmadi.");
        }
    } else if (command.toLowerCase() === 'del') {
        let item = data.join(' ');
        let index = array.indexOf(item);
        if (index > -1) {
            array.splice(index, 1);
            console.log(`${item} massivdan o'chirildi.`);
        } else {
            console.log(`${item} massivda topilmadi.`);
        }
    } else {
        console.log("Notog'ri buyruq kiritildi.");
    }
}

console.log("Kiritilgan ma'lumotlar massiv ko'rinishida:", array);
