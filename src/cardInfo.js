import { v4 as uuidv4 } from 'uuid';
import painting1 from './images/painting1.png';
import painting2 from './images/painting2.png';
import painting3 from './images/painting3.png';
import painting4 from './images/painting4.png';

// array of cards
export const cards = [
    { id: uuidv4(), src: painting1, name: 'painting-1', hasBeenClicked: false },
    { id: uuidv4(), src: painting2, name: 'painting-2', hasBeenClicked: false },
    { id: uuidv4(), src: painting3, name: 'painting-3', hasBeenClicked: false },
    { id: uuidv4(), src: painting4, name: 'painting-4', hasBeenClicked: false }
]