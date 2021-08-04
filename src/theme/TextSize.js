import {Platform} from 'react-native';
import {totalSize} from '../utils/Dimensions';

export const TextSize = {
  bigSize: Platform.OS === 'ios' ? totalSize(2.9) : totalSize(2.6),
  h1: Platform.OS === 'ios' ? totalSize(2.2) : totalSize(2.4),
  h2: Platform.OS === 'ios' ? totalSize(2) : totalSize(2.2),
  h3: Platform.OS === 'ios' ? totalSize(1.8) : totalSize(2),
  h4: Platform.OS === 'ios' ? totalSize(1.6) : totalSize(1.8),
  h5: Platform.OS === 'ios' ? totalSize(1.4) : totalSize(1.7),
  h6: Platform.OS === 'ios' ? totalSize(1.2) : totalSize(1.4),
};
