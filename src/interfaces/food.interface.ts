import IMaterial from './material.interface';

export default interface IFood {
  id: number;
  name_kr: string;
  name_en: string;
  image: string;
  materials: Array<Array<IMaterial>>;
  minHeartsRestored: number;
  maxHeartsRestored: number;
  minSellingPrice: number;
  maxSellingPrice: number;
  note_en: string;
  note_kr: string;
  footNotes: string[];
}
