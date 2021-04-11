import { select, takeEvery, call } from 'redux-saga/effects';
import actions from 'reduxState/actions';
// import { post } from 'utils/request';
import { Alert } from 'react-native';

import { selectLocation } from 'reduxState/selectors';
import { Location } from 'types';
import pickImage from 'utils/pickImage';

export function* watchShowCameraOptions() {
  yield takeEvery(actions.showCameraOptions, showCameraOptions);
}

function* showCameraOptions() {
  const location: Location | undefined = yield select(selectLocation);
  if (location) {
    yield call(recognizeImage, location.lon, location.lat);
  } else {
    Alert.alert('尚未获得当前定位');
  }
}

async function recognizeImage(lon: number, lat: number) {
  console.log('lon,lat', `${lon},${lat}`);
  const pic = await pickImage();
  if (!pic) {
    return;
  }
  const formData = new FormData();
  formData.append('file', {
    uri: pic.path,
    type: pic.mime,
    name: 'file.jpg',
  });
}
