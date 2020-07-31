import React from "react";
import "./index.css";

function Card()
{
    return(
        <>
        <table width="1100px">
        <tr >
            <td><div className="card" ><img className ="hello "src="rome.jpg" alt="fly" ><br><br><br><center><span style="color:orchid;font-size: small">I T A L Y</span><br><br><span style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;color:purple;font-size: xx-large">Rome</span><br><br><span style="color:orchid;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;font-size: large">from INR 42,3400*</span></center></div></td>
            <td><div className="card" ><img className="hello" src="paris.jpg" alt="fly" ><br><br><br><center><span style="color:orchid;font-size: small">F R A N C E</span><br><br><span style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;color:purple;font-size: xx-large">Paris</span><br><br><span style="color:orchid;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;font-size: large">from INR 41,3400*</span></center></div></td>
            <td><div className="card" ><img  className="hello" src="swis.jpg" alt="fly" ><br><br><br><center><span style="color:orchid;font-size: small">S W I T Z E R L A N D</span><br><br><span style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;color:purple;font-size: xx-large">Berne</span><br><br><span style="color:orchid;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;font-size: large">from INR 52,000*</span></center></div></td>
        </tr>
   </table>
   </>
    )
}

export default Card;