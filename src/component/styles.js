import { makeStyles } from '@material-ui/core/styles'
import image from '../img/warm.jpg'
import cold from '../img/cold.jpg'
import warm from '../img/hot.jpg'
const styles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    transition: '.5s',
  },

  hot: {
    backgroundImage: `url(${warm})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    transition: '.5s',
  },

  cold: {
    backgroundImage: `url(${cold})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    transition: '.5s',
  },

  // [theme.breakpoints.up('sm')]  :{
  //   container
  // }
}))

export default styles
