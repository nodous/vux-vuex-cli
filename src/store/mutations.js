import * as types from './mutation-types.js'
export default {
  [types.CHANGE_EDITINFO] (state, data) {
    state.editInfo = data
  }
}
