const express = require("express");
const router = express.Router();

const {Usuario, Administrador} = require("./model.js");

router.use((req, res, next) => {
  console.log("Middleware >");
  next();
});

router.get("/adm", async function(req, res){
	user = await Administrador.findAll();
	res.send(user);
})


// GET URL SEARCH
router.get("/", async function(req, res){
	let nome   = req.query.nome,
			pagina = ((req.query.pagina || 0) * 9) - 9;
			
	const param = {
		limit: 9,
		offset: (pagina >= 0 ? pagina : 0),
		include: Ship
	};

	if(nome != undefined)
	  param.where = {nome: nome};
	
	user = await Usuario.findAll(param);
	res.send(user);
})

// GET PARAM SEARCH
router.get("/:userId", async function(req, res){
	const idUser = req.params.userId;
	const user   = await Usuario.findAll({where: {id: idUser}});
	console.log(user);
	res.send(user);
})

// POST 
router.post("/", async function(req, res){
	const {nome, idade} = req.body;

	const usuario = await Usuario.create({nome: nome, idade: idade});
	res.send(usuario);
})

// PUT 
router.put("/", async function(req, res){
	const {id, nome, idade} = req.body;

	const usuario = await Usuario.update(
		{nome: nome, idade: idade},
		{where: {
			id: id
		}, returning: true}
	);
	res.send(usuario);
})

// DELETE
router.delete("/", async function(req, res){
	const {id} = req.body;

	const usuario = await Usuario.destroy(
		{where: {
			id: id
		}, returning: true}
	);
	res.send(usuario);
})

module.exports = router;