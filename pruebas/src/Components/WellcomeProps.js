export default function Wellcome(props){
    console.log(props);
    const { cosa, name } = props;
    return (
        <div>
            <p>Hola {name}, desde Wellcome</p>
            <p>{cosa}</p>
            <p>{name}</p>
        </div>
    );
}