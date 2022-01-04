# To implement linear regression model

``` python
import numpy as np
import matplotlib.pyplot as plt

# def equation(x, y):  #MSE (Mean Squared Error) function
#     x_ = [i - np.mean(x) for i in x]
#     y_ = [i - np.mean(y) for i in y]
#     m = (np.array(x_) * np.array(y_)).sum() / (np.array(x_)**2).sum()
#     c = np.mean(y) - m * np.mean(x)
#     yp = [m * i + c for i in x]
#     r2 = ((np.array(yp) - np.mean(y))**2).sum() / ((np.array(y_))**2).sum()
#     print("m =", m, "c =", c, "r2 =", round(r2, 2))
#     return (m, c, round(r2, 2))

# x = np.array([1, 2, 3, 4, 5])
# y = np.array([3, 4, 2, 4, 5])

# plt.plot(x, y, 'bo-', markersize=10)

# eq = equation(x, y)

# y = eq[0] * x + eq[1]

# plt.plot(x, y, 'go-', markersize=20)
#plt.show()

import pandas as pd
import seaborn as sns

df = pd.read_csv('insurance.csv', skiprows=4)
df.rename(columns={
    'Y = total payment for all the claims in thousands of Swedish Kronor':
    'Payments'
},
          inplace=True)

df['Claims'] = df.index
df.reset_index(drop=True, inplace=True)
print(df.head())

# plt.plot(df['Claims'], df['Payments'], 'bo', markersize=10)

# sns.regplot(x="Claims", y="Payments", data=df)
#plt.show()

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

x = df['Claims'].values
y = df['Payments'].values

x = x.reshape(-1, 1)
x_train, x_test, y_train, y_test = train_test_split(x,
                                                    y,
                                                    test_size=0.33,
                                                    random_state=42)
model = LinearRegression().fit(x_train, y_train)
print(model.score(x_test, y_test))

y_pred = model.predict(x_test)
plt.plot(x_train, y_train, 'ro', label='Training data')
plt.plot(x_test, y_pred, 'g', label='Predicted data')

plt.show()
```
