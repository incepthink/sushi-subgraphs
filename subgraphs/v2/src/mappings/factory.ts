/* eslint-disable prefer-const */
import { Bytes, log } from '@graphprotocol/graph-ts'
import { PairCreated } from '../../generated/Factory/Factory'
import { Bundle, Pair, Token, UniswapFactory } from '../../generated/schema'
import { Pair as PairTemplate } from '../../generated/templates'
import {
  fetchTokenDecimals,
  fetchTokenName,
  fetchTokenSymbol,
  fetchTokenTotalSupply,
  ZERO_BD,
  ZERO_BI
} from './helpers'
import { FACTORY_ADDRESS } from './../constants'
