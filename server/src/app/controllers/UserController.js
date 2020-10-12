import User from "../models/User";

function dar_cor_aleatoria(){
  hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F")
  cor_aleatoria = "#";
  for (i=0;i<6;i++){
     posarray = aleatorio(0,hexadecimal.length)
     cor_aleatoria += hexadecimal[posarray]
  }
  return cor_aleatoria
}

class UserController {
  async store(req, res) {
    try {

      const {firstName, lastName, participation} = req.body;

      const color = '#' + Math.floor (Math.random () * 16777215) .toString (16);

      await User.create({firstName, lastName, participation, color})

      return res.status(201).json({firstName, lastName, participation, color});

    } catch (error) {

      return res.status(400).json(error);
    }
  }

  async delete(req, res) {
    try {

      const { id } = req.params;

      const user = await User.findByPk(id);

      await user.destroy();

      return res.status(201).json({"message":"user successfully deleted"});

    } catch (error) {

      return res.status(401).json(error);

    }
  }
  async index(req, res) {
    try {

      const user = await User.findAll();

      return res.status(201).json(user);

    } catch (error) {

      return res.status(401).json(error);

    }
  }

  async indexById(req, res) {
    try {

      const { id } = req.params;

      const user = await User.findByPk(id);

      return res.status(201).json(user);

    } catch (error) {
      
      return res.status(401).json(error);

    }
  }

  async update(req,res) {
    try {
      
      const { id } = req.params;

      const user = await User.findByPk(id);

      const userUp = await user.update(req.body);

      return res.status(201).json(userUp);

    } catch (error) {
      return res.status(401).json(error);
    }
  }
}

export default new UserController();
