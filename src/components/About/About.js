import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ErrorBlock from '../ErrorBlock/ErrorBlock';
import GitHubIcon from '@material-ui/icons/GitHub';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from "@octokit/rest";
import Pagination from '@material-ui/lab/Pagination';
import styles from './About.module.css';

const octokit = new Octokit();

const title = (<h1 className={styles.title}>Мои репозитории: </h1>);

class About extends React.Component {
    state = {
        isLoading: true,
        nameUser: [],
        userInfo: [],
    		avatarUrl: [],
        repoList: [],
        isError: false,
        errorText: '',
    		bio: [],
    		html_url: [],
        pageLimit: 2,
        countPages: 0,
        currentPage: 0,
        repoPageList: []

    }


    componentDidMount() {
        octokit.repos.listForUser({
            username: 'DorokhovaNA',
        }).then(({ data }) => {
              this.setState({
                  repoList: data,
                  isLoading: false
              })

          this.setState({
            repoPageList: this.state.repoList.slice(0, this.state.pageLimit),
            countPages: Math.ceil(this.state.repoList.length / this.state.pageLimit)
      });

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
                  bio: res.data.bio,
				          html_url: res.data.html_url,
                  isLoading: false
              })
        })
          .catch(err =>
              this.setState({
                  isLoading: false,
                  isError: true,
                  errorText: 'Что-то пошло не так...'
              })
        );
    }

    onChangePagination(event, value) {
        this.setState({
          currentPage: value,
          repoPageList: this.state.repoList.slice((value - 1) * this.state.pageLimit, ((value - 1) * this.state.pageLimit + this.state.pageLimit))
        });
   }

    render() {
        const { isLoading, repoList, avatarUser, nameUser, isError, errorText, bio, html_url, repoPageList, countPages } = this.state;
        return (
          <Card variant="outlined">
              <CardContent className={styles.card}>
                  <img className={styles.img} src={avatarUser} alt={avatarUser} />
                  <h1 className={styles.title}> {isError ? errorText : 'Дорохова Нина'} </h1>
                  <div className={styles.bio}> { bio } </div>
			            <div className={styles.github}>
			               <GitHubIcon />
			            </div>
  			             <div>
                        <h1 className={styles.title}>{isLoading ? <CircularProgress /> : 'Мои репозитории:' }</h1>
                        {!isLoading && <ul>
                            {isError ?
    				    	              <ErrorBlock /> :
                                repoPageList.map(repo => (<li key={repo.name}>
                                    <a href={repo.html_url} className={styles.link} target="_blank" rel="noreferrer">{repo.name}</a>
                                    <p className={styles.text}>{repo.description}</p>
                                    <div>
                                      <span className={styles.language}> {repo.language} </span>
                                      <span className={styles.updated}>
                                          {'updated '}
                                          {new Date(repo.updated_at).toLocaleString('en-US',{
                                          day: 'numeric',
                                          month: 'short',
                                          year: 'numeric',})}
                                      </span>
                                    </div>
                                </li>))}
                          </ul>}
                     </div>
                     <div className={styles.pagination}>
                         <Pagination
                         count={countPages}
                         variant="outlined"
                         color="secondary"
                         onChange={this.onChangePagination.bind(this)} />
                     </div>
              </CardContent>
          </Card>
        )
    }
}

export default About;
