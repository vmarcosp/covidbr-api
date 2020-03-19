import Loki from 'lokijs'
import { GlobalData } from '~/modules/global/typeDefs/GlobalData';
import { Country } from '~/modules/countries/typeDefs/Country';

export const db = new Loki('cache.json');

export const GlobalCollection = db.addCollection<GlobalData>('global')

export const CountryCollection = db.addCollection<Country>('countries')
