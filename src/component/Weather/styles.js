import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '20px',
    margin: '20px 0',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '0 auto',
    width: '100%',
    color: '#fff',
    height: '60px',
  },
  textField: {
    width: '100%',
    input: {
      color: '#fff',
      fontSize:'20px'
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

  cardContent: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  cardContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '500px',
  },

  card: {
    background: 'transparent',
    color: '#fff',
    border: 'none',
  },
  sunContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  icons: {
    fontSize: '40px',
    marginLeft:'10px'
  },

  country : {
    fontSize : '20px'
  },

  temp: {
    fontSize :'30px'
  },

  //sm
  [theme.breakpoints.up('sm')]: {
    icons: {
      fontSize: '40px',
    },
    title: {
      fontSize: '20px',
      marginTop:'10px'
    },


    //md
    [theme.breakpoints.up('md')] : {
      header: {
        height:'200px'
      },
      icons: {
        fontSize:'60px',
        margin:'0'
      },
      title: {
        fontSize:'50px',
        margin:'20px 0'
      },
      temp: {
        fontSize:'60px'
      },
      country : {
        fontSize:'40px'
      }
    }
  },
}))

export default styles;