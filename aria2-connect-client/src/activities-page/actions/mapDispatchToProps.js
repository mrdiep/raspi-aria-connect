import RefreshAction from './refresh.action';
console.log(new RefreshAction().middleware());

const mapDispatchToProps = dispatch => {
    return {
      RefreshAction: (payload) => {
          dispatch(new RefreshAction(payload).middleware())
      }
    };
  };

export default mapDispatchToProps;