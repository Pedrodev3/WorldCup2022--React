package br.com.fiap.resource;

import java.util.List;

import javax.websocket.server.PathParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import br.com.fiap.bo.UsuarioBO;
import br.com.fiap.to.UsuarioTO;


@Path("/login")
public class UsuarioResource {
	UsuarioBO ub = new UsuarioBO();
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response loginUsuario(UsuarioTO usuario) {
		return Response.status(200).entity(ub.validacao(usuario)).build();
	}
	
	
	//GET-BY_ID
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public UsuarioTO buscar(@PathParam("id") int id){
		return ub.listar(id);
	}
		
	
	//GET-ALL
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<UsuarioTO> buscar(){
		return ub.listarTodos();
	}
	
}
