import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from "@octokit/rest";
import styles from './About.module.css';

const octokit = new Octokit();

const title = (<h1 className={styles.title}>Мои репозитории: </h1>);

class About extends React.Component {
    state = {
        isLoading: true,
        nameUser: [],
        avatarUser: [],
        repoList: [],
        isError: false,
        errorText: ''
    }

    componentDidMount() {
        octokit.repos.listForUser({
            username: 'DorokhovaNA',
        }).then(({ data }) => {
              this.setState({
                  repoList: data,
                  isLoading: false
              })
        })
          .catch(err =>
              this.setState({
                  isLoading: false,
                  isError: true,
                  errorText: 'Данные недоступны'
              })

        );
        octokit.users.getByUsername({
            username: 'DorokhovaNA',
        }).then(( res ) => {
              this.setState({
                  nameUser: res.data.login,
                  avatarUser: res.data.avatar_url,
                  isLoading: false
              })
        })
          .catch(err =>
              this.setState({
                  isLoading: false,
                  isError: true,
                  errorText: 'Данные недоступны'
              })
        );
    }

    render() {
        const { isLoading, repoList, avatarUser, nameUser, isError, errorText } = this.state;
        return (
          <Card variant="outlined">
              <CardContent>
                  <img src={avatarUser} />
                  <h1 className={styles.title}> {isError ? errorText : nameUser} </h1>
                  <h1 className={styles.title}>{isLoading ? <CircularProgress /> : 'Мои репозитории:' }</h1>
                  {!isLoading && <ol>
                      {repoList.map(repo => (<li key={repo.id}>
                          {repo.name}
                      </li>))}
                  </ol>}
              </CardContent>
          </Card>
        )
    }
}

export default About;
