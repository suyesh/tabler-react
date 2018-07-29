// @flow

import * as React from "react";
import cn from "classnames";
import { Icon, Badge } from "../";
import type { Mouse } from "../../flow";

type Props = {|
  +children?: React.Node,
  +className?: string,
  /**
   * Display an Icon to the left of DropdownItem content
   */
  +icon?: string,
  /**
   * The content of the DropdownItem if children is not used
   */
  +value?: string,
  /**
   * Display a badge with this content to the right of DropdownItem content
   */
  +badge?: string,
  /**
   * The type/color of Badge to be displayed
   */
  +badgeType?: string,
  /**
   * Where the user should be taken on click.
   * By default this will be passed as the 'href' prop to the <a> tag,
   * but to the RootComponent it will be a 'to' prop instead
   */
  +to?: string,
  /**
   * A component to be used instead of an <a> tag
   */
  +RootComponent?: React.ElementType,
  /**
   * onClick handler
   */
  +onClick?: Mouse.onClick,
|};

/**
 * An individual item that should be contained within a Dropdown.Menu
 */
function DropdownItem({
  className,
  icon,
  value,
  children,
  badge,
  badgeType,
  to,
  RootComponent,
  onClick,
}: Props): React.Node {
  const classes = cn({ "dropdown-item": true }, className);
  const childrenForAll = (
    <React.Fragment>
      {badge && (
        <span className="float-right">
          <Badge color={badgeType}>{badge}</Badge>
        </span>
      )}
      {icon && (
        <React.Fragment>
          <Icon name={icon} className="dropdown-icon" />{" "}
        </React.Fragment>
      )}
      {value}
      {children}
    </React.Fragment>
  );
  return RootComponent ? (
    <RootComponent className={classes} to={to} onClick={onClick}>
      {childrenForAll}
    </RootComponent>
  ) : (
    <a className={classes} href={to} onClick={onClick}>
      {childrenForAll}
    </a>
  );
}

DropdownItem.displayName = "Dropdown.Item";

/** @component */
export default DropdownItem;
