// In authController.js
const registerController = () => {
    try{
      const {name, email, password, phone, address} = req.body

      // validation
      
    } catch(error){
      console.logo(error)
      res.status(500).send({
        success:false,
        message:'Error in Registration',
        error
      })
    }
  };
  
  export default registerController;
  