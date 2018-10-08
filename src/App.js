import React, { Component } from "react";
import { css } from "aphrodite/no-important";
import { styles } from "./App.styles";
import Item from "./Item";

class App extends Component {
  constructor(props) {
    super(props);

    const today = new Date();

    this.state = {
      isLoading: true,
      isFriday: today.getDay() == 5 ? true : false
    };

    setTimeout(this.getData.bind(this), 400);
  }
  getData() {
    fetch("/items.json")
      .then(res => res.json())
      .then(data => {
        this.state.isFriday &&
          data.map(item => {
            if (item.fridayPrio) {
              this.setState({
                fridayPrio: item
              });
            }
          });

        this.setState({
          data: data,
          isLoading: false
        });
      });
  }
  render() {
    return (
      <div>
        <header className={css(styles.header)}>
          <h1 className={css(styles.title)}>Centrica UX Dashboard</h1>
        </header>
        <main>
          {this.state.isLoading && <p>Fetching items...</p>}

          {this.state.isFriday &&
            !this.state.isLoading && (
              <div className={css(styles.friday)}>
                <h2 className={css(styles.fridayTitle)}>Today is Friday</h2>
                <strong className={css(styles.fridaySubtitle)}>
                  Complete your timesheet
                </strong>
                <Item {...this.state.fridayPrio} prio={true} />
              </div>
            )}
          <ul className={css(styles.itemList)}>
            {!this.state.isLoading &&
              this.state.data.map((item, i) => {
                return <Item key={i} {...item} />;
              })}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
