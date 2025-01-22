import React ,{useState} from 'react';
import './styles.css';
import foto from '../../assets/foto.jpg';



const Home: React.FC = () => {
    const [texto, setTexto] = useState('< Matias />');
    return (
        <div>
            <h1 className='teste'>{texto}</h1>
            <div className='containerImg'>
            <img className='img' src={foto} />
            <p className='textShow'>Olá me chamo Matias , sou desenvolvedor web e mobile e também tecnico em Informatica. Estou cursando Ciências da computação na Gran Faculdade e sou Formado em Serviços Júridicos e Notarias  </p>
            </div>
            <div className='containerDev'>
            <h2>Conhecimentos</h2>
            <ul className='listDev'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>React Native</li>
                <li>Node.js</li>
                <li>SQL</li>
                <li>Python</li>
            </ul>

            </div>
            
            
           
        </div>
    );
};

export default Home;
