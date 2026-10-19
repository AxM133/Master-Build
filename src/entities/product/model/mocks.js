// TODO: временные картинки вырезаны из макета — заменить на реальные фото
import brick from '../assets/brick.png'
import coil from '../assets/coil.png'
import hexagon from '../assets/hexagon.png'
import paver from '../assets/paver.png'
import square from '../assets/square.png'
import wave from '../assets/wave.png'

const COLORS = [
  { name: 'Серый', hex: '#737373' },
  { name: 'Красный', hex: '#9C0909' },
  { name: 'Желтый', hex: '#D48D37' },
  { name: 'Коричневый', hex: '#964B00' },
  { name: 'Малиновый', hex: '#DC143C' },
  { name: 'Графит', hex: '#49423D' },
  { name: 'Оранжевый', hex: '#D77D31' },
  { name: 'Черный', hex: '#000000' },
]

const prices = (gray, red, brown, yellow, other) => [
  { color: 'Серый', price: gray },
  { color: 'Красный', price: red },
  { color: 'Коричневый', price: brown },
  { color: 'Желтый', price: yellow },
  { color: 'Другие цвета', price: other },
]

// perSquareMeter — подпись для витрины, piecesPerSquareMeter — число для расчётов
export const TOP_PRODUCTS_MOCK = [
  { id: 1, name: 'Шестигранник 250x220x70', image: hexagon, size: '250x220x70мм', perSquareMeter: '21', piecesPerSquareMeter: 21, badge: 'Хит продаж', colors: COLORS, prices: prices(470, 530, 590, null, 510) },
  { id: 2, name: 'Брусчатка 200x100x50', image: paver, size: '200x100x50мм', perSquareMeter: '50', piecesPerSquareMeter: 50, badge: 'Популярное', colors: COLORS, prices: prices(440, 500, 550, 700, null) },
  { id: 3, name: 'Плитка квадрат 330x330x60', image: square, size: '330x330x60мм', perSquareMeter: '9', piecesPerSquareMeter: 9, badge: null, colors: COLORS, prices: prices(440, 500, 550, 700, null) },
  { id: 4, name: 'Катушка 250x160x60', image: coil, size: '250x160x60мм', perSquareMeter: '30', piecesPerSquareMeter: 30, badge: null, colors: COLORS, prices: prices(440, 500, 550, 700, null) },
  { id: 5, name: 'Кирпичик 250x125x60', image: brick, size: '250x125x60мм', perSquareMeter: '32', piecesPerSquareMeter: 32, badge: 'Выгодно', colors: COLORS, prices: prices(440, 500, 550, 700, null) },
  { id: 6, name: 'Волна 250x125x60', image: wave, size: '250x125x60мм', perSquareMeter: '32/40', piecesPerSquareMeter: 32, badge: null, colors: COLORS, prices: prices(450, 500, 550, 700, null) },
]
