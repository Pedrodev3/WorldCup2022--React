package br.com.fiap.to;

import javax.xml.bind.annotation.XmlRootElement;


@XmlRootElement
public class UsuarioTO {
	
	private int id;
	private String login;
	private String senha;
	private int rm;
	private String nome;

	public UsuarioTO() {
		// TODO Auto-generated constructor stub
	}

	public UsuarioTO(int id, String login, String senha, int rm, String nome) {
		super();
		this.id = id;
		this.login = login;
		this.senha = senha;
		this.rm = rm;
		this.nome = nome;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public int getRm() {
		return rm;
	}

	public void setRm(int rm) {
		this.rm = rm;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	

}
