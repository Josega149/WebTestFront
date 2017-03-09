import React, {Component} from 'react';


const ROOT_URL = "localhost:3000";
class Columna extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tema:this.props.tema,
      color:this.props.color,
      fotos:[]
    }
  }

  traerFotos()
  {
    axios.post(ROOT_URL + "/flickr/"+this.state.color, {
    nickName: this.props.username,
    password: this.props.password,
    folder: 'Favoritos',
    recipe: {
              tipo: 1,
              likes: 0,
              creadaPor: this.props.username,
              title: this.state.title,
              description: this.state.description,
              pictureGif: this.state.pictureGif,
              Ingredients:this.state.ingredients
            }
    });
  }

  render()
  {
    return(
      <div className="columna">
        {
          this.state.fotos.map(recipe => {
                      return (
                        <div key={recipe.title}>
                          <Recipe recipe={recipe} ingredients={recipe.Ingredients}
                           username={this.props.username} password={this.props.password}
                           title={recipe.title} getRecipes={this.getRecipesByUsername.bind(this)} />
                        </div>
                      );
          })
        }
      </div>
    )
  }

}
export default Columna;
