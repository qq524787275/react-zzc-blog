

const articleCardStyle={
    card: {
        textAlign: "center",
        boxShadow:
            "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    cardPlain: {
        background: "transparent",
        borderStyle:"solid",
        borderWidth:"1px",
        borderColor:"#ffffff",
        boxShadow: "none"
    },
    cardContent: {
        padding: "15px 20px !important",
        position: "relative"
    },
    cardTitle: {
        marginBottom: "0",
        marginTop: "10px",
        color: "#ffffff",
        fontSize: "1.2em",
        overflow:"hidden",
        textOverflow:"ellipsis",
        whiteSpace:"nowrap",
    },
    cardDescription: {
        color: "#999999",
        fontSize: ".8em",
        marginTop:"1em",
        minHeight:"60px",
        maxHeight:"60px",
        display:"-webkit-box",
        WebkitLineClamp:3,
        WebkitBoxOrient:"vertical",
        overflow:"hidden",

    },
    cardTime:{
        color:"#999999",
        fontSize:".9em",
    },
}
export default articleCardStyle;