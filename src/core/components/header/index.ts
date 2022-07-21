import Component from "../../templates/components";
import { PageIds } from "../../../pages/app";

const Buttons = [
    {
        id: PageIds.MainPage,
        text: "Main Page",
    },
    {
        id: PageIds.SettingsPage,
        text: "Settings Page",
    },
    {
        id: PageIds.StatisticsPage,
        text: "Statictics Page",
    },
];

class Header extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    renderPageButton() {
        const pageButton = document.createElement("div");
        Buttons.forEach((button) => {
            const buttonHTML = document.createElement("a");
            buttonHTML.href = `#${button.id}`;
            buttonHTML.innerText = button.text;
            pageButton.append(buttonHTML);
        });
        this.container.append(pageButton);
    }

    render() {
        this.renderPageButton();
        return this.container;
    }
}

export default Header;
