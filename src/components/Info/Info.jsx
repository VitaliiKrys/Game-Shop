import React, { useState } from 'react';

import styles from './Info.css';

function Info() {
    const [activatedToken, setActivatedToken] = useState('');
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [isCashOnDeliveryModalOpen, setIsCashOnDeliveryModalOpen] = useState(false);
    const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);
    const [isDeliveryCostModalOpen, setIsDeliveryCostModalOpen] = useState(false);
    const [isReturnPolicyModalOpen, setIsReturnPolicyModalOpen] = useState(false);
    const [isReceivingGoodsModalOpen, setIsReceivingGoodsModalOpen] = useState(false);
    const [isQualityGuaranteeModalOpen, setIsQualityGuaranteeModalOpen] = useState(false);

    const handleActivate = (tokenName) => {
        setActivatedToken(tokenName);
    };

    const handlePaymentModalToggle = () => {
        setIsPaymentModalOpen(!isPaymentModalOpen);
    };

    const handleCashOnDeliveryModalToggle = () => {
        setIsCashOnDeliveryModalOpen(!isCashOnDeliveryModalOpen);
    };

    const handleDeliveryModalToggle = () => {
        setIsDeliveryModalOpen(!isDeliveryModalOpen);
    };

    const handleDeliveryCostModalToggle = () => {
        setIsDeliveryCostModalOpen(!isDeliveryCostModalOpen);
    };

    const handleReturnPolicyModalToggle = () => {
        setIsReturnPolicyModalOpen(!isReturnPolicyModalOpen);
    };

    const handleReceivingGoodsModalToggle = () => {
        setIsReceivingGoodsModalOpen(!isReceivingGoodsModalOpen);
    };

    const handleQualityGuaranteeModalToggle = () => {
        setIsQualityGuaranteeModalOpen(!isQualityGuaranteeModalOpen);
    };

    const tokens = [
        {
            name: 'Newbie',
            description: 'Придбайте свою першу гру щоб відкрити цей жетон',
            discount: 'Знижка 5%',
            color: 'green',
        },
        {
            name: 'Beginner Gamer',
            description: 'Для відкриття зберіть свою першу бібліотеку із 3 ігор',
            discount: 'Знижка 7%',
            color: 'red',
        },
        {
            name: 'Collector',
            description: 'Для відкриття зберіть бібліотеку з 5 ігор',
            discount: 'Знижка 10%',
            color: 'red',
        },
        {
            name: 'Genre Expert',
            description: 'Для відкриття зберіть бібліотеку з 10 ігор і більше',
            discount: 'Знижка 15%',
            color: 'red',
        },
    ];

    return (
        <div className={styles.infoContainer}>
            <div className={styles.content}>
                <div className={styles.menuSection}>
                    <div className={styles.menuBlock}>
                        <h2>Оплата та доставка</h2>
                        <div className={styles.menuItem}>Оплата</div>
                        <button className={styles.paymentButton} onClick={handlePaymentModalToggle}>
                            Оплата картою 💳
                        </button>

                        {isPaymentModalOpen && (
                            <div className={styles.modalContent}>
                                <h3>Оплата картою</h3>
                                <p>
                                    Ви можете швидко та безпечно сплатити своє замовлення онлайн за допомогою
                                    банківських карток Visa, Mastercard, а також через Apple Pay чи Google Pay.
                                </p>
                            </div>
                        )}

                        <button className={styles.paymentButton} onClick={handleCashOnDeliveryModalToggle}>
                            Накладний платіж 💵
                        </button>

                        {isCashOnDeliveryModalOpen && (
                            <div className={styles.modalContent}>
                                <h3>Метод оплати &quot;Накладений платіж&quot;</h3>
                                <p>
                                    Метод оплати &quot;Накладений платіж&quot; доступний лише при виборі служби доставки
                                    &quot;Нова пошта&quot;.
                                </p>
                                <p>
                                    При виборі даного методу оплати додатково до вартості доставки Ви повинні будете
                                    також оплатити компанії &quot;Нова пошта&quot; комісійний збір за послугу
                                    &quot;Зворотна доставка&quot; в розмірі: 2% від вартості товару + 20 грн за доставку
                                    грошей нам.
                                </p>
                            </div>
                        )}

                        <div className={styles.menuItem}>Доставка</div>
                        <button className={styles.infoButton} onClick={handleDeliveryModalToggle}>
                            Правила доставки 📦
                        </button>

                        {isDeliveryModalOpen && (
                            <div className={styles.modalContent}>
                                <h3>Правила доставки</h3>
                                <p>
                                    Відправлення здійснюється по Україні через &quot;Нову пошту&quot; та
                                    &quot;Укрпошту&quot;. Усі замовлення страхуються на повну вартість, а упаковка
                                    здійснюється з великою увагою до деталей — витрати на пакування покриваємо ми. Ви
                                    можете обрати доставку до відділення або кур&apos;єром.
                                </p>
                            </div>
                        )}

                        <button className={styles.infoButton} onClick={handleDeliveryCostModalToggle}>
                            Вартість доставки
                        </button>

                        {isDeliveryCostModalOpen && (
                            <div className={styles.modalContent}>
                                <h3>Вартість доставки</h3>
                                <p>
                                    Вартість доставки сплачується вами безпосередньо поштовій службі &quot;Нова
                                    пошта&quot; або &quot;Укрпошта&quot; під час отримання посилки. Фактична сума
                                    залежить від ваги та габаритів посилки та включає страхування відповідно до вартості
                                    товару.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className={styles.menuBlock}>
                        <h2>Обмін та повернення</h2>
                        <button className={styles.infoButton} onClick={handleReturnPolicyModalToggle}>
                            Умови повернення 📄
                        </button>

                        {isReturnPolicyModalOpen && (
                            <div className={styles.modalContent}>
                                <h3>Умови повернення</h3>
                                <p>
                                    Якщо придбаний товар вам не підійшов, ви маєте право повернути його протягом 14 днів
                                    з моменту отримання. Товар повинен бути у новому стані, без слідів використання, з
                                    усіма оригінальними бірками та упаковкою. Для оформлення повернення, будь ласка,
                                    зверніться до нашої служби підтримки, надавши номер замовлення та опис причини
                                    повернення.
                                </p>
                            </div>
                        )}

                        <button className={styles.infoButton} onClick={handleReceivingGoodsModalToggle}>
                            Отримання товару 📦
                        </button>

                        {isReceivingGoodsModalOpen && (
                            <div className={styles.modalContent}>
                                <h3>Отримання товару</h3>
                                <p>
                                    Після прибуття замовлення у відділення поштової служби &quot;Нова пошта&quot; або
                                    &quot;Укрпошта&quot; ви отримаєте повідомлення з інформацією про доставку. Для
                                    отримання посилки, будь ласка, візьміть із собою документ, що підтверджує особу, та
                                    номер відправлення.
                                </p>
                            </div>
                        )}

                        <button className={styles.infoButton} onClick={handleQualityGuaranteeModalToggle}>
                            Гарантія якості Game Shop 💎
                        </button>

                        {isQualityGuaranteeModalOpen && (
                            <div className={styles.modalContent}>
                                <h3>Гарантія якості Game Shop</h3>
                                <p>
                                    Ми в Game Shop дбаємо про те, щоб наші клієнти отримували лише оригінальні та
                                    високоякісні товари. Всі ігри та аксесуари, представлені у нашому магазині,
                                    проходять ретельну перевірку на відповідність стандартам якості та є офіційно
                                    сертифікованими.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.tokensSection}>
                    <h2>Бонусні жетони</h2>
                    {tokens.map((token) => (
                        <div key={token.name} className={styles.token}>
                            <div
                                className={`${styles.tokenIcon} ${styles[token.name.replace(' ', '').toLowerCase()]}`}
                                style={{ backgroundColor: activatedToken === token.name ? 'red' : token.color }}
                            >
                                {token.name}
                                {activatedToken === token.name && (
                                    <span className={styles.activationMessage}> ✅ Жетон активовано</span>
                                )}
                            </div>
                            <div className={styles.tokenDescription}>{token.description}</div>
                            <div className={styles.tokenDiscount}>{token.discount}</div>
                            <button
                                className={styles.activateButton}
                                onClick={() => handleActivate(token.name)}
                                disabled={activatedToken === token.name}
                            >
                                Активувати жетон
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Info;
