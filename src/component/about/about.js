import style from '../../App.module.css'

const About = (props) => {
    return (
        <div className={style.wrapper}>
            <h1>О приложение:</h1>
            <p>
                "To do list" или Список TO DO — это простой список дел или список задач.
                Запиши в него все свои важные дела, чтобы не забыть.
            </p>
            <h3 className={style.link}>
                <a href={'/tasks'}>Назад</a>
            </h3>
        </div>
    )
}

export default About;