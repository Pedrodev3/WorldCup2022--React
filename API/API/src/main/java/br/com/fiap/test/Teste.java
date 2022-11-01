package br.com.fiap.test;

import br.com.fiap.bo.UsuarioBO;
import br.com.fiap.dao.UsuarioDAO;
import br.com.fiap.to.UsuarioTO;

public class Teste {

	public static void main(String[] args) {
		
		UsuarioDAO ud = new UsuarioDAO();
		
		UsuarioBO ub = new UsuarioBO();
		
		UsuarioTO ut = new UsuarioTO(5, "Pedro Victor", "Pedro123", 93627, "Pedro Victor");
		
		/**
		 * Testando validação de Login
		 * */
		
		// Validação no DAO
		// System.out.println("Resposta: " + ud.loginDAO(ut).getLogin());
		
		// Validação no BO
		// System.out.println("Resposta: " + ub.validacao(ut).getLogin());
		
		
		/**
		 * Testando SelectByID
		 * */
		
		// Get-BY_ID no DAO
		// System.out.println(ud.select(5).getId());
		
		// Get-BY_ID no BO
		// System.out.println(ub.listar(5).getId());
		
		
		/**
		 * Testando SelectAll
		 * */
		
		// GET-ALL no DAO
		System.out.println(ud.select());
		
		
		// GET-ALL no BO
		System.out.println(ub.listarTodos());
	}

}
