import '../App.css';

export default function Container(){
    const [thema,setThema]=useState('white');

    return(
        <div className={thema }>

        {children}
        </div>
    );
}