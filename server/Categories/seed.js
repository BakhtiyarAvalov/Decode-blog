const Categories = require('./Categories')
const data = [
    'Прогнозы в IT',
    'Веб разработка',
    'Мобильная разработка',
    'Фриланс',
    'Алгоритмы',
    'Тестирование IT системы',
    'Разработка игр',
    'Дизайн юзабилити',
    'Искуственный интелект',
    'Машинное обучение',
]

async function writeDataCategory(){
    const length = await Categories.count();
    if(length == 0){
        data.map((item, index) =>{
            new Categories({
                name: item,
                key: index
            }).save()
        })
    }
}    
module.exports = writeDataCategory;