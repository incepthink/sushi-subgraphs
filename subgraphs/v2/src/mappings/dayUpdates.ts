/* eslint-disable prefer-const */
import { BigDecimal, BigInt, Bytes, ethereum } from '@graphprotocol/graph-ts'
import { Bundle, Pair, PairDayData, Token, TokenDayData, UniswapDayData, UniswapFactory } from '../../generated/schema'
import { PairHourData } from '../../generated/schema'
import { ONE_BI, ZERO_BD, ZERO_BI } from './helpers'

import { FACTORY_ADDRESS } from './../constants'
