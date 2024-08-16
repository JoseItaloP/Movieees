import { useEffect} from "react";
import classNames from "classnames";

export default function Toggle({onClick, selected}: any) {

    useEffect(()=>{
        if(selected){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
        localStorage.setItem('Dark', `${selected}`)
    }, [selected])

   

  return (
    <div onClick={onClick} 
    className={classNames('flex w-12 h-7 bg-darkPink-950 rounded-full transition-all duration-500 cursor-pointer ',{
        'dark:bg-darkPink-200': selected,
    })}
    >
        <span className={classNames(
            'h-7 w-7 bg-white rounded-full transition-all duration-500 shadow-lg', {
                'ml-5': selected,
            }
        )}
        />
    </div>
  );
};

