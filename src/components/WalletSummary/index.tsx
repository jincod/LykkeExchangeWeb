import classnames from 'classnames';
import {observer} from 'mobx-react';
import * as React from 'react';
import {WalletModel} from '../../models';
import WalletTotalBalance from '../WalletTotalBalance/index';

interface WalletSummaryProps {
  wallet: WalletModel;
}

export const WalletSummary: React.SFC<WalletSummaryProps> = ({wallet}) => (
  <div>
    <div className="row">
      <div className="col-sm-7">
        <div className="wallet__info">
          <h2 className="wallet__title">
            {wallet.title}
            <i
              onClick={wallet.toggleCollapse}
              className={classnames(
                'icon',
                wallet.expanded
                  ? 'icon--chevron-thin-up'
                  : 'icon--chevron-thin-down'
              )}
            />
          </h2>
          <div className="wallet__desc">{wallet.desc}</div>
        </div>
      </div>
      <div className="col-sm-5">
        <WalletTotalBalance wallet={wallet} />
      </div>
    </div>
  </div>
);

export default observer(WalletSummary);
