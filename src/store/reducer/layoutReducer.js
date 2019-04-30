import Actions from '../actions'
// import initalState from '../state'

// eslint-disable-next-line consistent-return
export default function (action) {
  switch(action.type) {
     case Actions.openspin:
      return {
        spinState: true
      };
      case Actions.closespin:
      return {
        spinState: false
      };
     // no default
  }
}