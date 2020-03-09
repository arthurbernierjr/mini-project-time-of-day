export const dateContainerStyles = {
  container : {
    'minHeight': '100vh',
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'flex-start',
    'aliginItems': 'center'
  },
  message: {
    'color': '#35321e',
    'fontSize': '3rem',
    'textAlign': 'center',
    'backgroundColor': 'orange'
  },
  button : {
    'backgroundColor': 'blue',
    'color': 'white',
    'height': '3rem',
    'fontSize': '2rem',
    'width': '50vw',
    'margin': '0 auto',
    'minWidth': '250px',
    'boxShadow': '0px 8px 16px rgba(0,0,0, 0.2)',
    'transition': '0.5s',
    '&:hover': {
      boxShadow: '0px 14px 28px rgba(0,0,0, 0.5)'
    }
  }
}
