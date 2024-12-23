import Styles from './DynamicComponent.module.css'

const DynamicComponent = ({title, text}) => {
  return (
    <div className={Styles.containDinamiccomponents}>
        <h1 className={Styles.dinamyctiltle}>{title} </h1>
        <p className={Styles.dinamyctext}> {text} </p>
    </div>
  )
}

export default DynamicComponent

