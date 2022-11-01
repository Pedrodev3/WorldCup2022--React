package br.com.fiap.bo;

import java.util.List;

import br.com.fiap.dao.UsuarioDAO;
import br.com.fiap.to.UsuarioTO;

public class UsuarioBO {
	UsuarioDAO ud = null;

	public UsuarioTO validacao(UsuarioTO u) {
		ud = new UsuarioDAO();
		return ud.loginDAO(u);
	}
	
	
	public UsuarioTO listar(int id){
		ud = new UsuarioDAO();
		
		return ud.select(id);
	}
	
	
	public List<UsuarioTO> listarTodos(){
		ud = new UsuarioDAO();
		//REGRAS DE NEGÓCIO
		return ud.select();
	}
}
