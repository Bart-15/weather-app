import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    color: '#fff',
    marginTop: '40px',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '0 auto',
    width: '100%',
    color: '#fff',
    height: '200px',
  },
  textField: {
    width: '100%',
    input: {
      color: '#fff',
    },
  },

//   card: {
//     backgroundColor: 'transparent',
//     width: '400px',
//     color: '#fff',
//     margin:'auto',
//     display: 'flex',
//     justifyContent: 'space-between',
//     height: '500px',
//   },

  cardContent : {
    alignItems:'center',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    
  },

  cardContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width:'500px'
  },

  card : {
      background:'transparent',
      color:'#fff',
      border:'none'
  }
}))

export default styles;