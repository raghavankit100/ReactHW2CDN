

const MyReactApp = () => { 
    return (
        <div>

            <div id="heading">
                <h1>Learn Web Developement</h1>
            </div>

            <div className="card">
            <p>Welcome to MDN learning area, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi suscipit repudiandae veniam iste! Sapiente suscipit nesciunt repellendus deserunt quo vero.</p>
            </div>

            <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga animi maiores rem debitis autem a sapiente, quaerat illum <a href='#heading'>numquam aut tempora doloremque dignissimos? </a>Repellat dolores iure obcaecati, sint maiores soluta.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laborum autem culpa officiis at magnam. Dolorem omnis eligendi iure blanditiis. Quisquam quod aspernatur unde nam vero fugit ullam corrupti facilis. Nulla itaque voluptates eveniet odio aliquid optio accusantium suscipit in perferendis. Officia, odio vitae. Cupiditate rerum quod exercitationem aliquam placeat.</p>
            </div>

            <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi suscipit repudiandae veniam iste! Sapiente suscipit nesciunt repellendus deserunt quo vero.</p>
            </div>

        </div>
    )
};

const rootDiv = document.querySelector(".root")
const root = ReactDOM.createRoot(rootDiv);
root.render(
    <MyReactApp />
)




