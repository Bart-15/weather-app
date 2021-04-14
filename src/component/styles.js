import {makeStyles} from '@material-ui/core/styles'
import image from '../img/warm.jpg'
const styles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${image})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    width: '100%',
    height: '100vh',
  },
}))

export default styles;