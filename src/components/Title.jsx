function Title(props){
    return(

        <h1 className="text-3xl text-pink-100 font-bold text-center">
            
        {props.children}
        </h1>

       
    );
}

export default Title;