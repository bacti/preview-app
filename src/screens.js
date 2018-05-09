import { Navigation } from 'react-native-navigation'
import QrReader from './QrReader'
import Web from './Web'

Navigation.registerComponent('webapp.QrReader', () => QrReader)
Navigation.registerComponent('webapp.Web', () => Web)
