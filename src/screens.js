import { Navigation } from 'react-native-navigation'
import QrReader from './QrReader'
import MainView from './MainView'

Navigation.registerComponent('webapp.QrReader', () => QrReader)
Navigation.registerComponent('webapp.MainView', () => MainView)
