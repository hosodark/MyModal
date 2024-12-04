class MyModal {
    static #uniquePrefix = null;
    static #isModalOpen = false;
    static #useUniquePrefix = true;
    static #customClassNames = {};

    static #generateRandomId() {
        return Math.random().toString(36).substr(2, 9);
    }

    static #addDefaultStyles() {
        const prefix = MyModal.#useUniquePrefix ? `${MyModal.#uniquePrefix}_` : '';
        const styleId = `${prefix}modal_styles`;

        if (document.getElementById(styleId)) return;

        const style = document.createElement('style');
        style.id = styleId;

        const defaultStyles = `
            .${prefix}modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                display: none;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            }

            .${prefix}modal-dialog {
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                max-width: 50%;
                min-width: 400px;
                text-align: left;
                position: relative;
                box-sizing: border-box;
            }

            .${prefix}modal-button {
                position: absolute;
                bottom: 20px;
                right: 20px;
                padding: 10px 20px;
                background-color: #007BFF;
                color: #fff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }

            .${prefix}modal-button:hover {
                background-color: #0056b3;
            }

            .${prefix}modal-content {
                margin-bottom: 60px;
            }
        `;
        style.textContent = defaultStyles;
        document.head.appendChild(style);
    }

    static #renderModal(message) {
        const prefix = MyModal.#useUniquePrefix ? `${MyModal.#uniquePrefix}_` : '';

        // カスタムクラスとデフォルトクラスをマージ
        const classNames = {
            overlay: MyModal.#customClassNames.overlay || `${prefix}modal-overlay`,
            dialog: MyModal.#customClassNames.dialog || `${prefix}modal-dialog`,
            content: MyModal.#customClassNames.content || `${prefix}modal-content`,
            button: MyModal.#customClassNames.button || `${prefix}modal-button`,
        };

        const modalOverlay = document.createElement('div');
        modalOverlay.className = classNames.overlay;

        const modalDialog = document.createElement('div');
        modalDialog.className = classNames.dialog;

        const modalContent = document.createElement('div');
        modalContent.className = classNames.content;
        modalContent.innerHTML = message;

        const okButton = document.createElement('button');
        okButton.textContent = 'OK';
        okButton.className = classNames.button;

        okButton.addEventListener('click', () => {
            MyModal.#isModalOpen = false;
            modalOverlay.style.display = 'none';
            document.body.removeChild(modalOverlay);
        });

        modalDialog.appendChild(modalContent);
        modalDialog.appendChild(okButton);
        modalOverlay.appendChild(modalDialog);

        document.body.appendChild(modalOverlay);

        modalOverlay.style.display = 'flex';
    }

    static showModalDialog(message) {
        if (MyModal.#isModalOpen) return;

        if (MyModal.#useUniquePrefix && !MyModal.#uniquePrefix) {
            MyModal.#uniquePrefix = `prefix_${MyModal.#generateRandomId()}`;
        }

        MyModal.#addDefaultStyles();

        MyModal.#isModalOpen = true;
        MyModal.#renderModal(message);
    }

    static setUseUniquePrefix(value) {
        MyModal.#useUniquePrefix = value;
    }

    static setCustomClassNames(customClasses) {
        // カスタムクラスを部分的にマージ
        MyModal.#customClassNames = {
            overlay: customClasses.overlay || null,
            dialog: customClasses.dialog || null,
            content: customClasses.content || null,
            button: customClasses.button || null,
        };

        // カスタムクラスが完全には指定されていない場合はユニークプレフィックスを維持
        const isFullyCustom = Object.values(MyModal.#customClassNames).every(Boolean);
        MyModal.#useUniquePrefix = !isFullyCustom;
    }
}
