export default (props) => (
    <div id="clase-container">
        <h2>Clase de {props.nombre}</h2>
        {props.clase.map(item => {
            return (
                <div key={item.first_name.concat(item.last_name)} className="clase-list">
                    <img src={item.foto} alt="" width="50px" height="50px"/>
                    <p>{item.first_name} {item.last_name}</p>
                </div>
            )
        })}
        <style jsx>
            {
                `
                    #clase-container{
                        perpective:500px;
                    }
                    .clase-list{
                        display:flex;
                    }
                    .clase-list img {
                        paddig: 3px;
                        border: 1px solid #ccc;
                    }
                    .clase-list p {
                        font-size: 12px;
                        font-weight: bold;
                        font-style: italic;
                        margin-left: 12px;
                    }
                    .clase-list:hover {
                        transform: translateY(10px)scale(1);
                    }
                `
            }
        </style>
    </div>
)