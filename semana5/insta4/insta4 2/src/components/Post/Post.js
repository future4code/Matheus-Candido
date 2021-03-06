import React from 'react'
import './Post.css'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'

import iconeMarke from '../../img/mark.svg'
import iconeUnMark from '../../img/unmark.svg'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: true,
  }

  // onClickCurtida = () => {
  //   console.log('Curtiu!')
  //   if (this.state.curtido = true) {
  //     this.setState({
  //       curtido: this.state.curtido,
  //       numeroCurtidas: this.state.numeroCurtidas + 1
  //     })
  //   } if (this.state.numeroCurtidas === 1) {
  //     this.setState({
  //       curtido: !this.state.curtido,
  //       numeroCurtidas: this.state.numeroCurtidas - 1
  //     })
  //   }
  // }

  onClickCurtida = () => {
    console.log('Curtiu!')

    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: +1
    })

  }


  onClickMarked = () => {
    console.log('Marcado')
    this.setState({
      marcado: !this.state.marcado,
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
      this.state.numeroCurtidas = 0
    };
    let iconeMarked

    if (this.state.marcado) {
      iconeMarked = iconeMarke
    } else {
      iconeMarked = iconeUnMark
    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'} />

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeMarked}
          onClickIcone={this.onClickMarked}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post