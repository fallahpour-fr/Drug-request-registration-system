import { useContainer } from "./container";
import {View} from "./view"

export const Home = () => {
      let binding_data = {} 

      binding_data = useContainer();
  
      return View(binding_data)
}