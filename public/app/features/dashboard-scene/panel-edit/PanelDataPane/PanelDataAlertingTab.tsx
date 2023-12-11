import React from 'react';

import { IconName } from '@grafana/data';
import { SceneObjectBase, SceneComponentProps } from '@grafana/scenes';

import { PanelDataPaneTabState, PanelDataPaneTab } from './types';

export class PanelDataAlertingTab extends SceneObjectBase<PanelDataPaneTabState> implements PanelDataPaneTab {
  static Component = PanelDataAlertingTabRendered;
  tabId = 'alert';
  icon: IconName = 'bell';

  getTabLabel() {
    return 'Alert';
  }

  getItemsCount() {
    console.log('TODO PanelDataAlertingTab getItemsCount');
    return 0;
  }
}

function PanelDataAlertingTabRendered(props: SceneComponentProps<PanelDataAlertingTab>) {
  return <div>TODO Alerting</div>;
}
